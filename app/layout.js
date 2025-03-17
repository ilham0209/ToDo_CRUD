export const metadata = {
    title: 'To-Do List Application',
    description: 'A beautiful to-do list app for managing your activities',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body style={{
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
          backgroundColor: "#eae0d5",
          color: "#0a0908",
          margin: 0,
          padding: 0
        }}>
          {children}
        </body>
      </html>
    );
  }