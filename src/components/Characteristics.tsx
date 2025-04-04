type Props = {
  list: {
    number: number;
    title: string;
    description: string;
  }[];
};

export default function Characteristics({ list }: Props) {
  return (
    <section className="mx-auto flex justify-evenly">
      {list.map((charact, index) => (
        <article
          className="flex w-[22em] flex-col items-center text-center"
          key={index}
        >
          <p className="text-purple500 mb-[3.5rem] flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full border-1 p-6 text-center font-[Fraunces144] text-[1.5rem] leading-10">
            {charact.number}
          </p>
          <p className="textPreset3 text-purple900 mb-[1.75rem]">
            {charact.title}
          </p>
          <p className="textPreset4 text-purple900">{charact.description}</p>
        </article>
      ))}
    </section>
  );
}
