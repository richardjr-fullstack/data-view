import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full h-[200px] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 md:bg-gradient-to-r md:from-gray-900 md:via-gray-800 md:to-gray-900 text-gray-200 py-8">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 h-full">
                <div className="text-lg font-semibold">
                    &copy; {new Date().getFullYear()} DataView. All rights reserved.
                </div>
                <nav className="flex flex-wrap gap-4 text-sm">
                  <Link href="/about" className="hover:text-white transition">About</Link>
                  <Link href="/services" className="hover:text-white transition">Services</Link>
                  <Link href="/projects" className="hover:text-white transition">Projects</Link>
                  <Link href="/experience" className="hover:text-white transition">Experience</Link>
                </nav>
                <div className="flex gap-4">
                    <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
                    </Link>
                    <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-white transition">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </Link>
                </div>
            </div>
        </footer>
    );
}