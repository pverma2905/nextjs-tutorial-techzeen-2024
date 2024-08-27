const DynamicMetaData = () => {
  return (
    <div>Dynamic Meta Data in next js 14</div>
  )
}

export default DynamicMetaData

export function generateMetadata(){
    return{
        title:'My First Project',
        description:'This is my first next js 14 project'
    }
}