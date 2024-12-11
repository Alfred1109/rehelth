import os
import sys
import subprocess
import platform
import threading
import time
from typing import List, Dict

class ServiceManager:
    def __init__(self):
        # 项目根目录
        self.project_root = os.path.dirname(os.path.abspath(__file__))
        
        # 虚拟环境路径
        self.venv_path = os.path.join(self.project_root, 'venv')
        
        # 服务配置
        self.services: Dict[str, Dict] = {
            'backend': {
                'path': os.path.join(self.project_root, 'backend'),
                'command': self.get_python_command() + ['-m', 'uvicorn', 'main:app', '--reload', '--host', '0.0.0.0', '--port', '8000'],
                'name': 'FastAPI Backend'
            },
            'frontend': {
                'path': os.path.join(self.project_root, 'frontend'),
                'command': ['npm', 'run', 'dev'],
                'install_command': ['npm', 'install'],
                'name': 'React Frontend'
            },
            # 可以添加更多服务，如数据库、消息队列等
        }

    def get_python_command(self) -> List[str]:
        """获取Python解释器命令"""
        if platform.system() == 'Windows':
            python_executable = os.path.join(self.venv_path, 'Scripts', 'python')
        else:
            python_executable = os.path.join(self.venv_path, 'bin', 'python')
        
        return [python_executable]

    def run_service(self, service_name: str):
        """运行单个服务"""
        service = self.services[service_name]
        print(f"启动 {service['name']} 服务...")
        
        try:
            # 如果有安装命令，先执行安装
            if 'install_command' in service:
                print(f"正在安装 {service['name']} 依赖...")
                install_process = subprocess.Popen(
                    service['install_command'], 
                    cwd=service['path'], 
                    stdout=subprocess.PIPE, 
                    stderr=subprocess.STDOUT
                )
                # 等待安装完成
                install_process.wait()
            
            process = subprocess.Popen(
                service['command'], 
                cwd=service['path'], 
                stdout=subprocess.PIPE, 
                stderr=subprocess.STDOUT, 
                text=True,
                bufsize=1,
                universal_newlines=True
            )
            
            # 实时打印输出
            for line in process.stdout:
                print(f"{service['name']} >>> {line.strip()}")
            
            process.wait()
        except Exception as e:
            print(f"启动 {service['name']} 服务时出错: {e}")

    def start_services(self, selected_services: List[str] = None):
        """启动服务"""
        if selected_services is None:
            selected_services = list(self.services.keys())
        
        # 安装依赖
        self.install_dependencies()
        
        # 使用多进程替代多线程
        processes = []
        for service_name in selected_services:
            service = self.services[service_name]
            print(f"启动 {service['name']} 服务...")
            
            process = subprocess.Popen(
                service['command'], 
                cwd=service['path'], 
                stdout=subprocess.PIPE, 
                stderr=subprocess.PIPE,
                text=True,
                bufsize=1,
                universal_newlines=True
            )
            processes.append((service_name, process))
        
        # 实时打印输出
        while processes:
            for service_name, process in processes[:]:
                stdout_line = process.stdout.readline()
                stderr_line = process.stderr.readline()
                
                if stdout_line:
                    print(f"{service_name} >>> {stdout_line.strip()}")
                if stderr_line:
                    print(f"{service_name} (ERROR) >>> {stderr_line.strip()}")
                
                # 检查进程是否已结束
                if process.poll() is not None:
                    processes.remove((service_name, process))
        
        print("所有服务已停止")

    def install_dependencies(self):
        """安装项目依赖"""
        print("正在安装项目依赖...")
        
        # 创建虚拟环境（如果不存在）
        if not os.path.exists(self.venv_path):
            subprocess.run([sys.executable, '-m', 'venv', self.venv_path], check=True)
        
        # 激活虚拟环境并安装后端依赖
        pip_path = os.path.join(self.venv_path, 'bin', 'pip') if platform.system() != 'Windows' else os.path.join(self.venv_path, 'Scripts', 'pip')
        subprocess.run([pip_path, 'install', '-r', os.path.join(self.project_root, 'backend', 'requirements.txt')], check=True)
        
        # 前端依赖
        subprocess.run(['npm', 'install'], cwd=os.path.join(self.project_root, 'frontend'), check=True)

def main():
    manager = ServiceManager()
    
    print("Rehelth System 服务启动程序")
    print("可用服务:")
    for service in manager.services:
        print(f"- {service}")
    
    # 打印服务接口信息
    print("\n🌐 服务接口信息:")
    print("--------------------")
    print("后端 API 服务: http://localhost:8000")
    print("后端 API 文档: http://localhost:8000/docs")
    print("后端 Redoc 文档: http://localhost:8000/redoc")
    print("前端 Web 应用: http://localhost:3000")
    print("--------------------\n")

    try:
        manager.start_services()
    except KeyboardInterrupt:
        print("\n服务已停止")
    except Exception as e:
        print(f"启动服务时发生错误: {e}")

if __name__ == '__main__':
    main()
