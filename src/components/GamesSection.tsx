import GameCard from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function GamesSection() {
  const games = [
    {
      title: "Цветные сортировки",
      description:
        "Развиваем логическое мышление и цветовосприятие через сортировку предметов по цветам",
      ageGroup: "2-4 года",
      category: "Логика",
      duration: "15 мин",
      difficulty: "easy" as const,
      icon: "Palette",
      color: "bg-vivid-purple",
    },
    {
      title: "Театр теней",
      description:
        "Развиваем воображение и речь через создание историй с помощью теней от рук",
      ageGroup: "3-6 лет",
      category: "Творчество",
      duration: "20 мин",
      difficulty: "medium" as const,
      icon: "Drama",
      color: "bg-bright-orange",
    },
    {
      title: "Музыкальная математика",
      description: "Изучаем числа и счет через ритм, песни и музыкальные игры",
      ageGroup: "4-7 лет",
      category: "Математика",
      duration: "25 мин",
      difficulty: "medium" as const,
      icon: "Music",
      color: "bg-pink-500",
    },
    {
      title: "Эмоциональные карточки",
      description:
        "Учимся распознавать и выражать эмоции через игровые карточки и мимику",
      ageGroup: "3-5 лет",
      category: "Социализация",
      duration: "10 мин",
      difficulty: "easy" as const,
      icon: "Smile",
      color: "bg-green-500",
    },
    {
      title: "Конструкторские задачи",
      description:
        "Развиваем пространственное мышление через строительство по схемам",
      ageGroup: "5-7 лет",
      category: "Инженерия",
      duration: "30 мин",
      difficulty: "hard" as const,
      icon: "Building",
      color: "bg-blue-500",
    },
    {
      title: "Сенсорные коробки",
      description:
        "Развиваем тактильные ощущения и мелкую моторику через различные текстуры",
      ageGroup: "1-3 года",
      category: "Сенсорика",
      duration: "20 мин",
      difficulty: "easy" as const,
      icon: "Hand",
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-rubik text-gray-800 mb-4">
            Популярные игры и активности
          </h2>
          <p className="text-lg font-open-sans text-gray-600 max-w-2xl mx-auto">
            Проверенные развивающие игры для разных возрастов и навыков. Каждая
            игра разработана с учетом детской психологии.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-bright-orange text-bright-orange hover:bg-bright-orange hover:text-white font-rubik text-lg px-8 py-4"
          >
            <Icon name="Grid3X3" className="mr-2" size={20} />
            Смотреть все игры
          </Button>
        </div>
      </div>
    </section>
  );
}
