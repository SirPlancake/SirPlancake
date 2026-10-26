
import * as React from "react";
import * as ReactRouter from "react-router-dom";
import * as Lucide from "lucide-react";

export default function Page() {
    const [Loading, setLoading] = React.useState(true);
    const [Index, setIndex] = React.useState(0);

    return (
        <main className="w-full min-h-screen bg-black flex items-center justify-center p-6">
            {Loading && (
                <Lucide.LoaderCircle className="absolute w-10 h-10 text-white animate-spin" strokeWidth={1.5}/>
            )}

            <img key={Index} src={`https://cataas.com/cat?width=512&height=521&${Index}`} alt="Random Cat" onLoad={() => setLoading(false)} onError={() => setLoading(false)} className={`w-full max-w-150 aspect-square object-cover rounded-2xl shadow-2xl transition-opacity duration-400 ease-in-out ${Loading ? "opacity-0" : "opacity-100"}`}/>
        </main>
    );
}
