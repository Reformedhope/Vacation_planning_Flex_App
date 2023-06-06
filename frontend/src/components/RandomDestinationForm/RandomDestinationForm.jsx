

const RandomDestionationForm = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th> Destination</th>
          <th> Terrain</th>
          <th> State</th>
          <th> City</th>
          <th> Average Summer Tempature</th>
          <th> Average Winter Tempature</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>{props.destInput.name}</tr>
      </tbody>
    </table>
  );
};

export default RandomDestionationForm;
