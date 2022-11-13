import Table from "react-bootstrap/Table";

function InbodyTable({ profileData }) {
  return (
    <Table striped hover size="sm">
      <thead>
        <tr>
          <th>Current Weight</th>
          <th>Muscle</th>
          <th>Fat</th>
        </tr>
      </thead>
      <tbody>
        {profileData &&
          profileData.map((item, index) => {
            return (
              <tr>
                <td>{item.current_weight} KG</td>
                <td>{item.muscle} %</td>
                <td>{item.fat}%</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default InbodyTable;
