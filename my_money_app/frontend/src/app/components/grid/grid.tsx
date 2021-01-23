import React from "react";

class Grid extends React.Component {
  public props: any;

  constructor(props) {
    super(props);
    this.props = props;
  }

  public toCssClasses(numbers: string): string {
    const cols: string[] = numbers ? numbers.split(" ") : [];
    let classes: string = "";

    if (cols[0]) classes += `col-xs-${cols[0]}`;
    if (cols[1]) classes += `col-sm-${cols[1]}`;
    if (cols[2]) classes += `col-md-${cols[2]}`;
    if (cols[3]) classes += `col-lg-${cols[3]}`;

    return classes;
  }

  public render() {
    const gridClasses = this.toCssClasses(this.props.cols || "12");
    return <div className={gridClasses}>{this.props.children}</div>;
  }
}

export default Grid;
