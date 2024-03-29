import photo1 from './assets/girl&cat.jpg';
import photo2 from './assets/boy&dog.jpg';
import './somefacts.scss';

export const SomeFacts = () => {
  return (
    <div className='someFacts'>
      <h2 className='someFacts-title'>
        Откройте дверь в мир домашних питомцев и узнайте, как они могут изменить
        вашу жизнь!
      </h2>

      <div className='someFacts-text'>
        <p>
          <img className='someFacts-img1' src={photo1} alt='boy&dog' />
          <span>В мире</span>, где каждое детство запоминается замечательными
          мгновениями с пушистыми друзьями рядом, хранится своя особая мечта -
          завести себе неповторимого питомца. Возможно, и ваше сердце витает в
          облаках при мысли о бездонной любви и заботе, которую вы сможете
          дарить этому маленькому существу.
        </p>
        <p>
          И хотя, возможно, вы слышали от родителей о глубокой ответственности,
          отдавшись этой хрупкой идее, помимо заботы и времени, вы найдете нечто
          более ценное. Домашние питомцы научат ваших детей и вас самих быть
          ответственными, полными любви, заботы, а самое главное - сопереживать
          и делить радость.
        </p>
        <p>
          В этом безграничном общении и заботе о наших пушистых друзьях, кошках
          и собаках расставятся счастливые точки над грустными мыслями. И дружба
          с домашним питомцем, построенная на уважении, понимании и взаимном
          интересе даст возможность почувствовать спокойствие и равновесие.
        </p>
        <p>
          <img className='someFacts-img2' src={photo2} alt='girl&cat' />
          Не упускайте возможность завести себе такого верного спутника и
          открыть для себя все прелести общения с питомцем. В конце концов,
          взаимодействие с домашними животными учит нас любить и уважать,
          дружить и сопереживать. Отвечать на безусловную любовь и преданность
          удивительных существ - это просто наша естественная реакция.
        </p>
        <p>
          И если ваше сердце говорит «Да» и вы хотите оказать нам поддержку, то
          вы можете прийти в один из наших пунктов и бесплатно выбрать себе
          любимца. А также, вы всегда можете принести корм и медицинские
          препараты, которые помогут создать благоприятную атмосферу заботы для
          наших пушистых друзей.
        </p>
        <br />
        <p>
          Но самая большая польза домашних питомцев заключается в том, что они
          способны изменить не только ваше настроение, но и улучшить вашу жизнь!
        </p>
      </div>
    </div>
  );
};
