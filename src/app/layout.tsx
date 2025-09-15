import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <html lang="en"
        className="dark"
        style={{colorScheme: "dark"}}
        >
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Job Application Tracker</title>
            </head>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}