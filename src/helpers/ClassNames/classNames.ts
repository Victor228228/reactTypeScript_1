
type Mods = Record<string, boolean | string>  //Record спуциальный тайпскриптовый тип(объект) который принмаает в качестве ключа в нашем случай стринг, а в качестве значения булаем или стринг


export function classNames(cls:string, mods: Mods, additional:string[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods) //при помощи Object.entries можем получить ключи и значения объекта, по итогу она возврщает массив
            .filter(([className, value]) => Boolean(value)) //фильтруем классы в массиве, со значение тру оставляем. Если у ключа(className) значение(value) тру то оставялем его
            .map(([className]) => className) //дальше новый получанный массив из фильтра мы перебираем и записываем только его ключи(className)(названия классов), без значений(value). И разворачиваем его ...Object.entries(mods) получается просто строки hovered, selectable и тп..
    ].join(' ') //склеиваем этот массив при помощи join и добавляем пробелы между элементами массива
}

/*
classNames('remove-btn', {hovered: true, selectable: true, red: false}, ['pdg']) //пример*/
