import Header from '../components/homepage/header/Header'
import SubHeader from '../components/homepage/header/SubHeader'
import Footer from '../components/front/Footer'
import Table from '../components/homepage/table/Table'

export default function Home({ data }) {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            
            <SubHeader/>
            
            <div className="flex-grow mb-14"> 
                <Table data={data}/>
            </div>
            
            <Footer/>
        </div>
    )
}

export async function getStaticProps() {

    console.log('fetching data');

    // fetch odata
    const response = await fetch('https://smucf-dev-ebs-g1t3-srv.cfapps.us10.hana.ondemand.com/api/Beneficiary');
    var data = await response.json();
    data = data.value;

    return {
        props: {
            data,
        },
    };
}