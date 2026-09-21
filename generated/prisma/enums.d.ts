export declare const EstadoCita: {
    readonly PROGRAMADA: "PROGRAMADA";
    readonly COMPLETADA: "COMPLETADA";
    readonly CANCELADA: "CANCELADA";
};
export type EstadoCita = (typeof EstadoCita)[keyof typeof EstadoCita];
export declare const Role: {
    readonly RECEPCIONISTA: "RECEPCIONISTA";
    readonly MEDICO: "MEDICO";
    readonly GERENCIA: "GERENCIA";
};
export type Role = (typeof Role)[keyof typeof Role];
