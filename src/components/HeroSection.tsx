import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-soft-green to-soft-yellow py-16 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold font-rubik text-gray-800 mb-6">
            Развиваем детей через
            <span className="text-bright-orange"> игру!</span>
          </h1>

          <p className="text-xl font-open-sans text-gray-700 mb-8 leading-relaxed">
            Сборник проверенных игровых технологий для родителей и воспитателей.
            Развивающие игры, дидактические материалы и практические советы для
            детей от рождения до школы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-bright-orange hover:bg-bright-orange/90 text-white font-rubik text-lg px-8 py-4"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Начать играть
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-bright-orange text-bright-orange hover:bg-bright-orange hover:text-white font-rubik text-lg px-8 py-4"
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Узнать больше
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-vivid-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-vivid-purple" size={32} />
              </div>
              <h3 className="text-xl font-bold font-rubik text-gray-800 mb-2">
                Для всей семьи
              </h3>
              <p className="font-open-sans text-gray-600">
                Игры для детей разных возрастов и всех членов семьи
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-bright-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon
                  name="Lightbulb"
                  className="text-bright-orange"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-bold font-rubik text-gray-800 mb-2">
                Развивающие методики
              </h3>
              <p className="font-open-sans text-gray-600">
                Проверенные психологами и педагогами игровые технологии
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-soft-pink/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-pink-500" size={32} />
              </div>
              <h3 className="text-xl font-bold font-rubik text-gray-800 mb-2">
                С любовью к детям
              </h3>
              <p className="font-open-sans text-gray-600">
                Каждая игра создана с заботой о гармоничном развитии
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
