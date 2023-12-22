import './App.css'
import { Formik } from 'formik';
import CardWithForm from './components/features/cards-with-form';
import { validationSchema } from './components/features/cards-with-form/validation';


const App = () => {
  
  const handleSubmit = (values : any) => {
    console.log(values)
  }
  return (
    <>
      <Formik initialValues={{fullname:""}} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <CardWithForm />
      </Formik>
    </>
  )
}

export default App
