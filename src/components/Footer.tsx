export default function Footer() {
    return (
        <footer className="bg-white py-6 mt-10 border-t">
            <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
                © {new Date().getFullYear()} Winstore. All rights reserved.
            </div>
        </footer>
    )
}