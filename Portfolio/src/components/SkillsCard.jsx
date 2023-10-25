const SkillsCard = ({ icon, title, text }) => {
    return (
      <article>
        <span className='h-16 w-16'>{icon}</span>
        <h4 className='mt-3 font-bold'>{title}</h4>
      </article>
    );
  };
  export default SkillsCard;