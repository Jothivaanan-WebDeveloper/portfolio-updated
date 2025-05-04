import { TbFileDownload } from 'react-icons/tb';

const FloatingActionButton = () => {
    const handleDownload = () => {
        const fileUrl = '/Resume.pdf';
        const link = document.createElement('a');
        link.href = fileUrl;
        link.setAttribute('download', 'JothivananResume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <button
                onClick={handleDownload}
                className="flex gap-1 items-center fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 hover:scale-110 text-gray-100 p-3 rounded-full shadow-lg transition duration-300 ease-in-out focus:outline-none"
            >
                <TbFileDownload size={30} /><span className='font-semibold text-sm md:text-base'>Resume</span>
            </button>
        </div>
    );
};

export default FloatingActionButton;
