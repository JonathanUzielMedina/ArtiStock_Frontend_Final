type Props = {
    filterby:string;
    name: string;
    setName: (name: string) => void;
  };
  
  export default function Filter(props: Props) {
    return (
      <>
        <div className="px-4 py-3 border-b-slate-400 border-b-2 filter">
          <h3 className="text-md font-medium mb-2 text-gray-600">Filter</h3>
          <div className="flex space-x-4">
            <div className="w-full ">
              <label className="block text-sm font-medium text-gray-600 m-2">
                {props.filterby.toUpperCase()}
              </label>
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full"
                placeholder="Escribe aqui"
                value={props.name}
                onChange={(e) => props.setName(e.target.value)}
              />
             {/*<button className="btn">Filtrar</button>*/} 
            </div>
          </div>
        </div>
      </>
    );
  }