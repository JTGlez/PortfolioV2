const SkillCard = ({img, title, subtitle}) => (
    <div class="skills__stack__box">
        <ul class="skills__stack__list">
            <li class="skills__stack__item"><img class = "stack__item__img" src={img}></img></li>
            <li class="skills__stack__title"><h4>{title}</h4></li>
            <li class="skills__stack__item__subtitle"><p>{subtitle}</p></li>
        </ul>
    </div>
);

export default SkillCard;