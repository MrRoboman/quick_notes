import Tag from './Tag'

function App() {
  return (
    <div className="container mx-auto pt-4">
      <h1 className="text-2xl">Quick Notes</h1>
      <Tag name={'Rick James'} onClick={() => console.log('CLICK')} onClickX={() => console.log('x clicked')} />
    </div>
  );
}

export default App;
