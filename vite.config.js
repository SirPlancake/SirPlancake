import * as Vite from "vite"
import ReactPlugin from "@vitejs/plugin-react";
import TailwindPlugin from "@tailwindcss/vite";

export default Vite.defineConfig({
    base: "/",
    plugins: [ReactPlugin(), TailwindPlugin()],
    build: {
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks(ID) {
                    if (ID.includes("node_modules")) {
                        const Parts = ID.split("node_modules/")[1];
                        const Package = Parts.split("/")[0].startsWith("@") ? Parts.split("/").slice(0, 2).join("/") : Parts.split("/")[0];
                        return `${Package}`;
                    };
                },
            },
        },
    },
});