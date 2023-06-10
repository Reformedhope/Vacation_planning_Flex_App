

const RandomDestionationForm = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th> Destination</th>
          <th> Terrain</th>
          <th> City</th>
          <th> State</th>
          <th> Average Summer Tempature</th>
          <th> Average Winter Tempature</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.destInput.name}</td>
          <td>{props.destInput.terrain}</td>
          <td>{props.destInput.city}</td>
          <td>{props.destInput.state}</td>
          <td>{props.destInput.average_summer_temp}</td>
          <td>{props.destInput.average_winter_temp}</td>
        </tr>

      </tbody>
    </table>
  );
};

export default RandomDestionationForm;
