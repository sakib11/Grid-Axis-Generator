class GridGenerator {

    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }
    set height(newHeight){
        if(newHeight){
            this._height = newHeight;
        }
    }
    get stepX(){
        return this._stepX;
    }
    set stepX(newVal){
        if(newVal){
            this._stepX = newVal;
        }
    }
    get stepY(){
        return this._stepY;
    }
    set stepY(newVal){
        if(newVal){
            this._stepY = newVal;
        }
    }
    get rowNum(){
        return this._rowNum;
    }
    get colNum(){
        return this._colNum;
    }

    step (limit,divider){
        return Math.round(limit / divider);
    }

    modifiedHeight (rowNum,step){
        return rowNum * step;
    }

    init (){
        let data = [];
        for(let i = 0; i < this.rowNum; i++){
            for(let j = 0; j < this.width; j = j + this.stepX){
                let yAxis = i * this.stepY;
                data.push({x:j,y:yAxis});
            }
        }
        return data;
    }


    constructor(width,height,colNum,rowNum) {
        this._width = width;
        this._height = height;
        this._rowNum = rowNum;
        this._colNum = colNum;
        this._stepX = this.step(this.width,this.colNum);
        this._stepY = this.step(this.height,this.rowNum);
        this.height = this.modifiedHeight(this.rowNum,this.stepY);
    }
}
exports.GridGenerator = GridGenerator;