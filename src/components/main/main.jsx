import Form from "../form/form";

import main from './main.css'

const Main =()=>{

  return(
    <section className="main">
      <div className="main-img">
        <img src="https://img.freepik.com/free-photo/close-up-legs-in-sneakers-and-hands-on-steering-wheel-of-hipster-style-bearded-man-in-red-hoodie-and-beige-trousers-riding-alone-with-backpack-on-bicycle-healthy-active-lifestyle-traveler-backpacker_285396-5493.jpg?w=1380&t=st=1681971607~exp=1681972207~hmac=ba2310f79fc88f7b493b48516d2d85ea719d86ba2d3efe13167e0864d393c0a6" alt="" />
      </div>
      <div className="main-form-block">
        <h1>Сервис проката велосипедов</h1>
        <div>В настоящее время участились случаи кражи велосипедов. Если вам что то известно, собщите нам!</div>
      <Form>
        </Form>      
      </div>

    </section>

  )
}

export default Main;