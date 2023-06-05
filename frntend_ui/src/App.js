import * as React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { filterBy } from "@progress/kendo-data-query";
const initialFilter = {
  logic: "and",
  filters: [
    {
      field: "name",
      operator: "contains",
      value: "",
    },
  ],
};

function App() {
  const [filter, setFilter] = React.useState(initialFilter);
  const [fetchedData, setFetchedData] = React.useState([])

  React.useEffect(()=>{
    const fetchData = async () =>{
      const res = await fetch('http://localhost:3003/data', {
        method: 'POST',
      })
      const data = await res.json()
      setFetchedData(data.students)
      console.log(data)
    }
    fetchData()
  },[])

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5rem'}}>
      <Grid
        style={{
          height: "420px",
        }}
        data={filterBy(fetchedData, filter)}
        filterable={true}
        filter={filter}
        onFilterChange={(e) => setFilter(e.filter)}
      >
        <Column field="id" title="ID" filterable={false} width="60px" />
        <Column field="name" title="Name" width="240px" />
        <Column
          field="age"
          width="240px"
          filter="numeric"
          title="Age"
        />
        <Column field="hobbies" width="300px" title="Hobbies"/>
      </Grid>
    </div>
  );
}

export default App;
