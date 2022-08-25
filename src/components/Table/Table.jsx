import Table from 'react-bootstrap/Table';  
    const data = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male"},
    ]

function ResponsiveBreakpointsExample() {
  return (
    <div sx={{display: 'flex',width:"100%",justifyContent: 'center',alignItems: 'center'}}>
      <div sx={{width:"70%"}}>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>College Name</th>
                    <th>Rank</th>
                </tr>
                </thead>
                <tbody>
                {data.map((val, key) => {
                return (
                    <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.age}</td>
                    </tr>
                )
                })}
                </tbody>
            </Table>
      </div>      
    </div>
  );
}

export default ResponsiveBreakpointsExample;