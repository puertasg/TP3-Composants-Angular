class Formation {
    private _nom: String;
    private _description: String;
    private _prix: number;
    private _dateDebut: Date;
    private _dateFin: Date;
    constructor(nom: string, description: string, prix?: number, dateDebut?: Date, dateFin?: Date) {
        this._nom = nom;
        this._description = description;
        
        if (prix) {
            this._prix = prix;
        }

        if (dateDebut) {
            this._dateDebut = dateDebut;
        }

        if (dateFin) {
            this._dateFin = dateFin;
        }
    }

    /**
     * Getter nom
     * @return {String}
     */
    public get nom(): String {
        return this._nom;
    }

    /**
     * Getter description
     * @return {String}
     */
    public get description(): String {
        return this._description;
    }

    /**
     * Getter prix
     * @return {number}
     */
    public get prix(): number {
        return this._prix;
    }

    /**
     * Getter dateDebut
     * @return {Date}
     */
    public get dateDebut(): Date {
        return this._dateDebut;
    }

    /**
     * Getter dateFin
     * @return {Date}
     */
    public get dateFin(): Date {
        return this._dateFin;
    }

    /**
     * Setter nom
     * @param {String} value
     */
    public set nom(value: String) {
        this._nom = value;
    }

    /**
     * Setter description
     * @param {String} value
     */
    public set description(value: String) {
        this._description = value;
    }

    /**
     * Setter prix
     * @param {number} value
     */
    public set prix(value: number) {
        this._prix = value;
    }

    /**
     * Setter dateDebut
     * @param {Date} value
     */
    public set dateDebut(value: Date) {
        this._dateDebut = value;
    }

    /**
     * Setter dateFin
     * @param {Date} value
     */
    public set dateFin(value: Date) {
        this._dateFin = value;
    }

}

export { Formation }