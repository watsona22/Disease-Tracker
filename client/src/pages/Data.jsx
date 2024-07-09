
import data from '../assets/ukhsa.pdf';

function Data() {
    return (
        <div>
            <h2>Data</h2>
            <iframe src={data} title='UKData' width="100%" height='500px' />
        </div>

    );
}
export default Data;
