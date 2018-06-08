class Formation {
    private _nom: String = "Nom de  la formation";
    private _description: String = "La description ici";
    constructor() {

    }

    /**
     * Getter nom
     * @return {String }
     */
    public get nom(): String {
        return this._nom;
    }

    /**
     * Getter description
     * @return {String }
     */
    public get description(): String {
        return this._description;
    }

    /**
     * Setter nom
     * @param {String } value
     */
    public set nom(value: String) {
        this._nom = value;
    }

    /**
     * Setter description
     * @param {String } value
     */
    public set description(value: String) {
        this._description = value;
    }

}

export { Formation }