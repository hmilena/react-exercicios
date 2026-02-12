import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const All = () => {
    return (
        <div className="exe-multiplo">
            <div className="grid grid-cols-2 grid-rows-3 gap-4 ">
                <Header />
                <Sidebar />
                <MainContent />
                <Footer />
            </div>
        </div>
    );
};

export default All;