
export async function getServerSideProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return { props  : { data }}
}

const DataPage = ({data}) => {
    return <div>
        <h1>Data Page</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
}

export default DataPage;