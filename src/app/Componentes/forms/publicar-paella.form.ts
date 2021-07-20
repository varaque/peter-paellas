import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paella } from 'src/app/models/paella.model';

export class PublicarPaellaForm {

    paella: Paella;

    fb: FormBuilder;
    form: FormGroup;

    hasFormErrors: boolean;
    pristineValues: string;

    constructor(paella?: Paella) {
        this.paella = paella || new Paella();
        Object.keys(this.paella).forEach(key => this[key] = this.paella[key]);
        this.inicializarFormulario();
    }

    getForm(): FormGroup {
        return this.fb.group({
            id_paella: this.fb.control(this.paella.id_paella, [Validators.required]),
            paella_nombre: this.fb.control(this.paella.paella_nombre, [Validators.required]),
            paella_descripcion: this.fb.control(this.paella.paella_descripcion, [Validators.required]),
            paella_precio: this.fb.control(this.paella.paella_precio, [Validators.required]),
            paella_foto: this.fb.control(this.paella.paella_foto),
            paella_tipo: this.fb.control(this.paella.paella_tipo),
            paella_raciones: this.fb.control(this.paella.paella_raciones),
            paella_ver: this.fb.control(this.paella.paella_ver),
            paella_mascotas: this.fb.control(this.paella.paella_mascotas),
            id_cocinero: this.fb.control(this.paella.id_cocinero),
            id_provincia: this.fb.control(this.paella.id_provincia),
        });
    }
    inicializarFormulario(): void {
        const f = this.getForm();
        this.form = f;
        this.pristineValues = JSON.stringify(f.value);
    }
}
