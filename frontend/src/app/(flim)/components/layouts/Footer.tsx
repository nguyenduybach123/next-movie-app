// App
import { footerBgImage, logoImage } from '@/assets';
import Image from 'next/image';

// Component
export const Footer = () => {
    // Templates
    return (
        <div
            className="h-100 lg:h-120 px-8 py-8 md:p-16 bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${footerBgImage.src})` }}
        >
            <div className="max-w-4xl h-full mx-auto flex flex-col justify-around">
                <a className="flex items-center justify-center hover:cursor-pointer group" href="/">
                    <Image src={logoImage} alt="Logo" className="mr-2 md:mr-4 w-8 md:w-12" />
                    <h1 className="text-white font-semibold text-2xl md:text-4xl group-hover:text-red-main group-hover:transition-custom">
                        theMovies
                    </h1>
                </a>
                <div className="grid grid-cols-3 gap-4 text-white font-semibold text-base md:text-2xl -mx-2 mt-4">
                    <a className="footer-item" href="/">
                        Home
                    </a>
                    <a className="footer-item" href="/">
                        Live
                    </a>
                    <a className="footer-item" href="/">
                        You must watch
                    </a>
                    <a className="footer-item" href="/">
                        Contact us
                    </a>
                    <a className="footer-item" href="/">
                        FAQ
                    </a>
                    <a className="footer-item" href="/">
                        Recent release
                    </a>
                    <a className="footer-item" href="/">
                        Term of services
                    </a>
                    <a className="footer-item" href="/">
                        Premium
                    </a>
                    <a className="footer-item" href="/">
                        Top IMDB
                    </a>
                    <a className="footer-item" href="/">
                        About us
                    </a>
                    <a className="footer-item" href="/">
                        Pravacy policy
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
