import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PacienteModel = runtime.Types.Result.DefaultSelection<Prisma.$PacientePayload>;
export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null;
    _avg: PacienteAvgAggregateOutputType | null;
    _sum: PacienteSumAggregateOutputType | null;
    _min: PacienteMinAggregateOutputType | null;
    _max: PacienteMaxAggregateOutputType | null;
};
export type PacienteAvgAggregateOutputType = {
    id: number | null;
};
export type PacienteSumAggregateOutputType = {
    id: number | null;
};
export type PacienteMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellidoPaterno: string | null;
    apellidoMaterno: string | null;
    ci: string | null;
    email: string | null;
    telefono: string | null;
    direccion: string | null;
    fechaNacimiento: Date | null;
};
export type PacienteMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
    apellidoPaterno: string | null;
    apellidoMaterno: string | null;
    ci: string | null;
    email: string | null;
    telefono: string | null;
    direccion: string | null;
    fechaNacimiento: Date | null;
};
export type PacienteCountAggregateOutputType = {
    id: number;
    nombre: number;
    apellidoPaterno: number;
    apellidoMaterno: number;
    ci: number;
    email: number;
    telefono: number;
    direccion: number;
    fechaNacimiento: number;
    _all: number;
};
export type PacienteAvgAggregateInputType = {
    id?: true;
};
export type PacienteSumAggregateInputType = {
    id?: true;
};
export type PacienteMinAggregateInputType = {
    id?: true;
    nombre?: true;
    apellidoPaterno?: true;
    apellidoMaterno?: true;
    ci?: true;
    email?: true;
    telefono?: true;
    direccion?: true;
    fechaNacimiento?: true;
};
export type PacienteMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    apellidoPaterno?: true;
    apellidoMaterno?: true;
    ci?: true;
    email?: true;
    telefono?: true;
    direccion?: true;
    fechaNacimiento?: true;
};
export type PacienteCountAggregateInputType = {
    id?: true;
    nombre?: true;
    apellidoPaterno?: true;
    apellidoMaterno?: true;
    ci?: true;
    email?: true;
    telefono?: true;
    direccion?: true;
    fechaNacimiento?: true;
    _all?: true;
};
export type PacienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PacienteWhereInput;
    orderBy?: Prisma.PacienteOrderByWithRelationInput | Prisma.PacienteOrderByWithRelationInput[];
    cursor?: Prisma.PacienteWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PacienteCountAggregateInputType;
    _avg?: PacienteAvgAggregateInputType;
    _sum?: PacienteSumAggregateInputType;
    _min?: PacienteMinAggregateInputType;
    _max?: PacienteMaxAggregateInputType;
};
export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
    [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePaciente[P]> : Prisma.GetScalarType<T[P], AggregatePaciente[P]>;
};
export type PacienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PacienteWhereInput;
    orderBy?: Prisma.PacienteOrderByWithAggregationInput | Prisma.PacienteOrderByWithAggregationInput[];
    by: Prisma.PacienteScalarFieldEnum[] | Prisma.PacienteScalarFieldEnum;
    having?: Prisma.PacienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PacienteCountAggregateInputType | true;
    _avg?: PacienteAvgAggregateInputType;
    _sum?: PacienteSumAggregateInputType;
    _min?: PacienteMinAggregateInputType;
    _max?: PacienteMaxAggregateInputType;
};
export type PacienteGroupByOutputType = {
    id: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string | null;
    ci: string;
    email: string;
    telefono: string | null;
    direccion: string | null;
    fechaNacimiento: Date;
    _count: PacienteCountAggregateOutputType | null;
    _avg: PacienteAvgAggregateOutputType | null;
    _sum: PacienteSumAggregateOutputType | null;
    _min: PacienteMinAggregateOutputType | null;
    _max: PacienteMaxAggregateOutputType | null;
};
export type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PacienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PacienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PacienteGroupByOutputType[P]>;
}>>;
export type PacienteWhereInput = {
    AND?: Prisma.PacienteWhereInput | Prisma.PacienteWhereInput[];
    OR?: Prisma.PacienteWhereInput[];
    NOT?: Prisma.PacienteWhereInput | Prisma.PacienteWhereInput[];
    id?: Prisma.IntFilter<"Paciente"> | number;
    nombre?: Prisma.StringFilter<"Paciente"> | string;
    apellidoPaterno?: Prisma.StringFilter<"Paciente"> | string;
    apellidoMaterno?: Prisma.StringNullableFilter<"Paciente"> | string | null;
    ci?: Prisma.StringFilter<"Paciente"> | string;
    email?: Prisma.StringFilter<"Paciente"> | string;
    telefono?: Prisma.StringNullableFilter<"Paciente"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Paciente"> | string | null;
    fechaNacimiento?: Prisma.DateTimeFilter<"Paciente"> | Date | string;
    citas?: Prisma.CitaListRelationFilter;
};
export type PacienteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidoPaterno?: Prisma.SortOrder;
    apellidoMaterno?: Prisma.SortOrderInput | Prisma.SortOrder;
    ci?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
    citas?: Prisma.CitaOrderByRelationAggregateInput;
};
export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    ci?: string;
    email?: string;
    AND?: Prisma.PacienteWhereInput | Prisma.PacienteWhereInput[];
    OR?: Prisma.PacienteWhereInput[];
    NOT?: Prisma.PacienteWhereInput | Prisma.PacienteWhereInput[];
    nombre?: Prisma.StringFilter<"Paciente"> | string;
    apellidoPaterno?: Prisma.StringFilter<"Paciente"> | string;
    apellidoMaterno?: Prisma.StringNullableFilter<"Paciente"> | string | null;
    telefono?: Prisma.StringNullableFilter<"Paciente"> | string | null;
    direccion?: Prisma.StringNullableFilter<"Paciente"> | string | null;
    fechaNacimiento?: Prisma.DateTimeFilter<"Paciente"> | Date | string;
    citas?: Prisma.CitaListRelationFilter;
}, "id" | "ci" | "email">;
export type PacienteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidoPaterno?: Prisma.SortOrder;
    apellidoMaterno?: Prisma.SortOrderInput | Prisma.SortOrder;
    ci?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
    _count?: Prisma.PacienteCountOrderByAggregateInput;
    _avg?: Prisma.PacienteAvgOrderByAggregateInput;
    _max?: Prisma.PacienteMaxOrderByAggregateInput;
    _min?: Prisma.PacienteMinOrderByAggregateInput;
    _sum?: Prisma.PacienteSumOrderByAggregateInput;
};
export type PacienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.PacienteScalarWhereWithAggregatesInput | Prisma.PacienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.PacienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PacienteScalarWhereWithAggregatesInput | Prisma.PacienteScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Paciente"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Paciente"> | string;
    apellidoPaterno?: Prisma.StringWithAggregatesFilter<"Paciente"> | string;
    apellidoMaterno?: Prisma.StringNullableWithAggregatesFilter<"Paciente"> | string | null;
    ci?: Prisma.StringWithAggregatesFilter<"Paciente"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Paciente"> | string;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"Paciente"> | string | null;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"Paciente"> | string | null;
    fechaNacimiento?: Prisma.DateTimeWithAggregatesFilter<"Paciente"> | Date | string;
};
export type PacienteCreateInput = {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string | null;
    ci: string;
    email: string;
    telefono?: string | null;
    direccion?: string | null;
    fechaNacimiento: Date | string;
    citas?: Prisma.CitaCreateNestedManyWithoutPacienteInput;
};
export type PacienteUncheckedCreateInput = {
    id?: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string | null;
    ci: string;
    email: string;
    telefono?: string | null;
    direccion?: string | null;
    fechaNacimiento: Date | string;
    citas?: Prisma.CitaUncheckedCreateNestedManyWithoutPacienteInput;
};
export type PacienteUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoPaterno?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoMaterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ci?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUpdateManyWithoutPacienteNestedInput;
};
export type PacienteUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoPaterno?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoMaterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ci?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    citas?: Prisma.CitaUncheckedUpdateManyWithoutPacienteNestedInput;
};
export type PacienteCreateManyInput = {
    id?: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string | null;
    ci: string;
    email: string;
    telefono?: string | null;
    direccion?: string | null;
    fechaNacimiento: Date | string;
};
export type PacienteUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoPaterno?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoMaterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ci?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacienteUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoPaterno?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoMaterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ci?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacienteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidoPaterno?: Prisma.SortOrder;
    apellidoMaterno?: Prisma.SortOrder;
    ci?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
};
export type PacienteAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PacienteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidoPaterno?: Prisma.SortOrder;
    apellidoMaterno?: Prisma.SortOrder;
    ci?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
};
export type PacienteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidoPaterno?: Prisma.SortOrder;
    apellidoMaterno?: Prisma.SortOrder;
    ci?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
};
export type PacienteSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type PacienteScalarRelationFilter = {
    is?: Prisma.PacienteWhereInput;
    isNot?: Prisma.PacienteWhereInput;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type PacienteCreateNestedOneWithoutCitasInput = {
    create?: Prisma.XOR<Prisma.PacienteCreateWithoutCitasInput, Prisma.PacienteUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.PacienteCreateOrConnectWithoutCitasInput;
    connect?: Prisma.PacienteWhereUniqueInput;
};
export type PacienteUpdateOneRequiredWithoutCitasNestedInput = {
    create?: Prisma.XOR<Prisma.PacienteCreateWithoutCitasInput, Prisma.PacienteUncheckedCreateWithoutCitasInput>;
    connectOrCreate?: Prisma.PacienteCreateOrConnectWithoutCitasInput;
    upsert?: Prisma.PacienteUpsertWithoutCitasInput;
    connect?: Prisma.PacienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PacienteUpdateToOneWithWhereWithoutCitasInput, Prisma.PacienteUpdateWithoutCitasInput>, Prisma.PacienteUncheckedUpdateWithoutCitasInput>;
};
export type PacienteCreateWithoutCitasInput = {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string | null;
    ci: string;
    email: string;
    telefono?: string | null;
    direccion?: string | null;
    fechaNacimiento: Date | string;
};
export type PacienteUncheckedCreateWithoutCitasInput = {
    id?: number;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno?: string | null;
    ci: string;
    email: string;
    telefono?: string | null;
    direccion?: string | null;
    fechaNacimiento: Date | string;
};
export type PacienteCreateOrConnectWithoutCitasInput = {
    where: Prisma.PacienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.PacienteCreateWithoutCitasInput, Prisma.PacienteUncheckedCreateWithoutCitasInput>;
};
export type PacienteUpsertWithoutCitasInput = {
    update: Prisma.XOR<Prisma.PacienteUpdateWithoutCitasInput, Prisma.PacienteUncheckedUpdateWithoutCitasInput>;
    create: Prisma.XOR<Prisma.PacienteCreateWithoutCitasInput, Prisma.PacienteUncheckedCreateWithoutCitasInput>;
    where?: Prisma.PacienteWhereInput;
};
export type PacienteUpdateToOneWithWhereWithoutCitasInput = {
    where?: Prisma.PacienteWhereInput;
    data: Prisma.XOR<Prisma.PacienteUpdateWithoutCitasInput, Prisma.PacienteUncheckedUpdateWithoutCitasInput>;
};
export type PacienteUpdateWithoutCitasInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoPaterno?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoMaterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ci?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacienteUncheckedUpdateWithoutCitasInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoPaterno?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidoMaterno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ci?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PacienteCountOutputType = {
    citas: number;
};
export type PacienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | PacienteCountOutputTypeCountCitasArgs;
};
export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteCountOutputTypeSelect<ExtArgs> | null;
};
export type PacienteCountOutputTypeCountCitasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
};
export type PacienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellidoPaterno?: boolean;
    apellidoMaterno?: boolean;
    ci?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    fechaNacimiento?: boolean;
    citas?: boolean | Prisma.Paciente$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.PacienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["paciente"]>;
export type PacienteSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellidoPaterno?: boolean;
    apellidoMaterno?: boolean;
    ci?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    fechaNacimiento?: boolean;
}, ExtArgs["result"]["paciente"]>;
export type PacienteSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellidoPaterno?: boolean;
    apellidoMaterno?: boolean;
    ci?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    fechaNacimiento?: boolean;
}, ExtArgs["result"]["paciente"]>;
export type PacienteSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    apellidoPaterno?: boolean;
    apellidoMaterno?: boolean;
    ci?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    fechaNacimiento?: boolean;
};
export type PacienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "apellidoPaterno" | "apellidoMaterno" | "ci" | "email" | "telefono" | "direccion" | "fechaNacimiento", ExtArgs["result"]["paciente"]>;
export type PacienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    citas?: boolean | Prisma.Paciente$citasArgs<ExtArgs>;
    _count?: boolean | Prisma.PacienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PacienteIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PacienteIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PacientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Paciente";
    objects: {
        citas: Prisma.$CitaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
        apellidoPaterno: string;
        apellidoMaterno: string | null;
        ci: string;
        email: string;
        telefono: string | null;
        direccion: string | null;
        fechaNacimiento: Date;
    }, ExtArgs["result"]["paciente"]>;
    composites: {};
};
export type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PacientePayload, S>;
export type PacienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PacienteCountAggregateInputType | true;
};
export interface PacienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Paciente'];
        meta: {
            name: 'Paciente';
        };
    };
    findUnique<T extends PacienteFindUniqueArgs>(args: Prisma.SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PacienteFindFirstArgs>(args?: Prisma.SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PacienteFindManyArgs>(args?: Prisma.SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PacienteCreateArgs>(args: Prisma.SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PacienteCreateManyArgs>(args?: Prisma.SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PacienteCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PacienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PacienteDeleteArgs>(args: Prisma.SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PacienteUpdateArgs>(args: Prisma.SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PacienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PacienteUpdateManyArgs>(args: Prisma.SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PacienteUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PacienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PacienteUpsertArgs>(args: Prisma.SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PacienteCountArgs>(args?: Prisma.Subset<T, PacienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PacienteCountAggregateOutputType> : number>;
    aggregate<T extends PacienteAggregateArgs>(args: Prisma.Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>;
    groupBy<T extends PacienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PacienteGroupByArgs['orderBy'];
    } : {
        orderBy?: PacienteGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PacienteFieldRefs;
}
export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    citas<T extends Prisma.Paciente$citasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Paciente$citasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PacienteFieldRefs {
    readonly id: Prisma.FieldRef<"Paciente", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Paciente", 'String'>;
    readonly apellidoPaterno: Prisma.FieldRef<"Paciente", 'String'>;
    readonly apellidoMaterno: Prisma.FieldRef<"Paciente", 'String'>;
    readonly ci: Prisma.FieldRef<"Paciente", 'String'>;
    readonly email: Prisma.FieldRef<"Paciente", 'String'>;
    readonly telefono: Prisma.FieldRef<"Paciente", 'String'>;
    readonly direccion: Prisma.FieldRef<"Paciente", 'String'>;
    readonly fechaNacimiento: Prisma.FieldRef<"Paciente", 'DateTime'>;
}
export type PacienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    where: Prisma.PacienteWhereUniqueInput;
};
export type PacienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    where: Prisma.PacienteWhereUniqueInput;
};
export type PacienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    where?: Prisma.PacienteWhereInput;
    orderBy?: Prisma.PacienteOrderByWithRelationInput | Prisma.PacienteOrderByWithRelationInput[];
    cursor?: Prisma.PacienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacienteScalarFieldEnum | Prisma.PacienteScalarFieldEnum[];
};
export type PacienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    where?: Prisma.PacienteWhereInput;
    orderBy?: Prisma.PacienteOrderByWithRelationInput | Prisma.PacienteOrderByWithRelationInput[];
    cursor?: Prisma.PacienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacienteScalarFieldEnum | Prisma.PacienteScalarFieldEnum[];
};
export type PacienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    where?: Prisma.PacienteWhereInput;
    orderBy?: Prisma.PacienteOrderByWithRelationInput | Prisma.PacienteOrderByWithRelationInput[];
    cursor?: Prisma.PacienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PacienteScalarFieldEnum | Prisma.PacienteScalarFieldEnum[];
};
export type PacienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PacienteCreateInput, Prisma.PacienteUncheckedCreateInput>;
};
export type PacienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PacienteCreateManyInput | Prisma.PacienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PacienteCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    data: Prisma.PacienteCreateManyInput | Prisma.PacienteCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PacienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PacienteUpdateInput, Prisma.PacienteUncheckedUpdateInput>;
    where: Prisma.PacienteWhereUniqueInput;
};
export type PacienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PacienteUpdateManyMutationInput, Prisma.PacienteUncheckedUpdateManyInput>;
    where?: Prisma.PacienteWhereInput;
    limit?: number;
};
export type PacienteUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PacienteUpdateManyMutationInput, Prisma.PacienteUncheckedUpdateManyInput>;
    where?: Prisma.PacienteWhereInput;
    limit?: number;
};
export type PacienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    where: Prisma.PacienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.PacienteCreateInput, Prisma.PacienteUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PacienteUpdateInput, Prisma.PacienteUncheckedUpdateInput>;
};
export type PacienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
    where: Prisma.PacienteWhereUniqueInput;
};
export type PacienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PacienteWhereInput;
    limit?: number;
};
export type Paciente$citasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    cursor?: Prisma.CitaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CitaScalarFieldEnum | Prisma.CitaScalarFieldEnum[];
};
export type PacienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PacienteSelect<ExtArgs> | null;
    omit?: Prisma.PacienteOmit<ExtArgs> | null;
    include?: Prisma.PacienteInclude<ExtArgs> | null;
};
