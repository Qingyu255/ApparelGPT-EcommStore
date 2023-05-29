import DesignCard from "../../../components/customiser/DesignCard"
import Layout from "../../../components/layout/Layout"
import CustomiserSettings from "../../../components/customiser/CustomiserSettings"
import Overview from "../../../components/overview/Overview"
import CreateDesign from "../../../components/customiser/CreateDesign"

export default function CustomPage() {
    return(
        <Layout>
            <div className="flex flex-wrap justify-center pt-5 md:pt-0">
                <div className="sm:mt-10 flex flex-col">
                    <div className="py-5 md:pt-0 lg:mt-10">
                        <DesignCard />
                    </div>
                    <div className="flex items-center justify-center lg:mx-10 lg:my-5">
                        <CustomiserSettings />
                    </div> 
                </div>
                <div className="mx-0 sm:mx-5 sm:my-10">
                    <CreateDesign />           
                </div>
            </div>
            <div className="mx-10 my-5 2xl:px-10">
                <Overview />
            </div>
        </Layout>
    )
}
