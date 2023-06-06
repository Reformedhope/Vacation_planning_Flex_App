

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
          <th> Budget Type</th>
        </tr>
      </thead>
      <tbody>{props.destinationEntered.map((destination) =>{
       
            <tr>
                <td>{destination.name}</td>
            </tr>
        
      })}
      </tbody>
    </table>
  );
};

export default RandomDestionationForm;
