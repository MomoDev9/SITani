import { Link } from "@inertiajs/react";

import ApplicationLogo from "@/Components/ApplicationLogo";
import DarkMode from "@/Components/DarkMode";
export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gradient-to-r from-orange-400 to-orange-600 dark:from-orange-600 dark:to-orange-800">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                    <p>SITani</p>
                </Link>
                <DarkMode />
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
        </div>
    );
}
