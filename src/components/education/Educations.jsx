import EducationsCard from "../common/educationsCard/EducationsCard";

const Educations = ({ items }) => {
  return (
    <section className="education">
      {items.map((item) => {
        return <EducationsCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default Educations;
