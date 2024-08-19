export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className="flex flex-col items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
                <h2 className="text-2xl font-semibold text-white">Loading...</h2>
                <p className="text-gray-400 mt-2">Please wait while we load the content</p>
            </div>

            {/* Custom CSS */}
            <style jsx>{`
                .loader {
                    border-top-color: #3498db;
                    animation: spin 1s infinite linear;
                }

                @keyframes spin {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
    );
}
