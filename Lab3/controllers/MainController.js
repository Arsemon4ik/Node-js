class MainController {
    models = [];
    constructor(entities) {
        if (Array.isArray(entities)) this.models = entities;
        else this.models = [];
    }
    get count() {
        return this.models.length;
    }
    push(...entities) {
        this.models.push(...entities);
        return entities;
    }
    remove(entityToRemove) {
        for (const [index, entity] of this.models.entries()) {
            if (entity === entityToRemove) {
                this.models.splice(index, 1);
                return entityToRemove;
            }
        }
    }
    search(searchString) {
        const matchingEntities = [];
        for (const entity of this.models) {
            for (const value of Object.values(entity)) {
                if (value === searchString) matchingEntities.push(entity);
            }
        }
        return new MainController(matchingEntities);
    }
    print() {
        for (const entity of this.models) {
            console.log(entity.toString());
        }
    }
}
module.exports = { MainController };