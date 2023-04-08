import DesignCard from "../../../components/customiser/DesignCard";
import Layout from "../../../components/layout/Layout";
import CustomiserSettings from "../../../components/customiser/CustomiserSettings";
import Overview from "../../../components/customiser/Overview";
import CreateDesign from "../../../components/customiser/CreateDesign";

export default function CustomPage() {

    return(
        <Layout>
            <div className="flex flex-wrap justify-center">
                <div className="mt-5 sm:mt-10 flex flex-row lg:flex-col">
                    <div className="lg:mt-10">
                        <DesignCard />
                    </div>
                    <div className="lg:mx-10 lg:my-5">
                        <CustomiserSettings />
                    </div> 
                </div>
                <div className="mx-0 sm:mx-5 my-5 sm:my-10">
                    <CreateDesign />           
                </div>
            </div>
            <div className="mx-10 my-5 px-10">
                <Overview />
            </div>
        </Layout>
    )
}
