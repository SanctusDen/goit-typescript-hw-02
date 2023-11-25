/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentClassProps {
  title: string;
}
class Component<T extends ComponentClassProps> {
  constructor (public props:T) {

  }
}

class Page extends Component<ComponentClassProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};