import os
from http.server import HTTPServer, SimpleHTTPRequestHandler

class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    os.chdir(web_dir)
    server_address = ('127.0.0.1', 8998)
    httpd = HTTPServer(server_address, NoCacheHandler)
    print(f'Server running at http://127.0.0.1:8998 from {web_dir}')
    httpd.serve_forever()
