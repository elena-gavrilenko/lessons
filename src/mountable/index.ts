export abstract class Mountable {
    abstract parent: HTMLElement;
    abstract self:HTMLElement


    protected abstract createSelf(): HTMLElement;

    mount (){
        this.parent.append(this.self);
    }

    unmount(){
        this.self.remove();
    }
}