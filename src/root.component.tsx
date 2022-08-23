import { Button } from '@alpha-labs/react-components';
// import { Button } from '@alpha-labs/styleguide';

export default function Root(props) {
   return (
      <header>
         <div className="flex justify-between flex-row">
            <h2>Title Here</h2>
            {props.name} is mounted!!!{' '}
            <div className="flex flex-col">
               <Button className="bg-primary">Home</Button>
               <Button className="bg-secondary">Payroll</Button>
               <Button className="bg-secondary">HRIS</Button>
            </div>
         </div>
      </header>
   );
}
