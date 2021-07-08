import BarChart from "components/BarChart";
import Datatable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="Container">
                <h1 className="text-primary py-3"> Dashboard de Vendas  </h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Porcentagem de vendas finalizadas</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Porcentagem de vendas finalizadas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary text-center">Todas as vendas</h2>

                </div>
                <Datatable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;