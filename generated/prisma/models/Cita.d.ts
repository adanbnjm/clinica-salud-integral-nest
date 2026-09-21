import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CitaModel = runtime.Types.Result.DefaultSelection<Prisma.$CitaPayload>;
export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null;
    _avg: CitaAvgAggregateOutputType | null;
    _sum: CitaSumAggregateOutputType | null;
    _min: CitaMinAggregateOutputType | null;
    _max: CitaMaxAggregateOutputType | null;
};
export type CitaAvgAggregateOutputType = {
    id: number | null;
    pacienteId: number | null;
    medicoId: number | null;
};
export type CitaSumAggregateOutputType = {
    id: number | null;
    pacienteId: number | null;
    medicoId: number | null;
};
export type CitaMinAggregateOutputType = {
    id: number | null;
    fechaHora: Date | null;
    creadaEn: Date | null;
    estado: $Enums.EstadoCita | null;
    pacienteId: number | null;
    medicoId: number | null;
};
export type CitaMaxAggregateOutputType = {
    id: number | null;
    fechaHora: Date | null;
    creadaEn: Date | null;
    estado: $Enums.EstadoCita | null;
    pacienteId: number | null;
    medicoId: number | null;
};
export type CitaCountAggregateOutputType = {
    id: number;
    fechaHora: number;
    creadaEn: number;
    estado: number;
    pacienteId: number;
    medicoId: number;
    _all: number;
};
export type CitaAvgAggregateInputType = {
    id?: true;
    pacienteId?: true;
    medicoId?: true;
};
export type CitaSumAggregateInputType = {
    id?: true;
    pacienteId?: true;
    medicoId?: true;
};
export type CitaMinAggregateInputType = {
    id?: true;
    fechaHora?: true;
    creadaEn?: true;
    estado?: true;
    pacienteId?: true;
    medicoId?: true;
};
export type CitaMaxAggregateInputType = {
    id?: true;
    fechaHora?: true;
    creadaEn?: true;
    estado?: true;
    pacienteId?: true;
    medicoId?: true;
};
export type CitaCountAggregateInputType = {
    id?: true;
    fechaHora?: true;
    creadaEn?: true;
    estado?: true;
    pacienteId?: true;
    medicoId?: true;
    _all?: true;
};
export type CitaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithRelationInput | Prisma.CitaOrderByWithRelationInput[];
    cursor?: Prisma.CitaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CitaCountAggregateInputType;
    _avg?: CitaAvgAggregateInputType;
    _sum?: CitaSumAggregateInputType;
    _min?: CitaMinAggregateInputType;
    _max?: CitaMaxAggregateInputType;
};
export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
    [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCita[P]> : Prisma.GetScalarType<T[P], AggregateCita[P]>;
};
export type CitaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
    orderBy?: Prisma.CitaOrderByWithAggregationInput | Prisma.CitaOrderByWithAggregationInput[];
    by: Prisma.CitaScalarFieldEnum[] | Prisma.CitaScalarFieldEnum;
    having?: Prisma.CitaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CitaCountAggregateInputType | true;
    _avg?: CitaAvgAggregateInputType;
    _sum?: CitaSumAggregateInputType;
    _min?: CitaMinAggregateInputType;
    _max?: CitaMaxAggregateInputType;
};
export type CitaGroupByOutputType = {
    id: number;
    fechaHora: Date;
    creadaEn: Date;
    estado: $Enums.EstadoCita;
    pacienteId: number;
    medicoId: number;
    _count: CitaCountAggregateOutputType | null;
    _avg: CitaAvgAggregateOutputType | null;
    _sum: CitaSumAggregateOutputType | null;
    _min: CitaMinAggregateOutputType | null;
    _max: CitaMaxAggregateOutputType | null;
};
export type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CitaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CitaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CitaGroupByOutputType[P]>;
}>>;
export type CitaWhereInput = {
    AND?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    OR?: Prisma.CitaWhereInput[];
    NOT?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    id?: Prisma.IntFilter<"Cita"> | number;
    fechaHora?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    creadaEn?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    estado?: Prisma.EnumEstadoCitaFilter<"Cita"> | $Enums.EstadoCita;
    pacienteId?: Prisma.IntFilter<"Cita"> | number;
    medicoId?: Prisma.IntFilter<"Cita"> | number;
    paciente?: Prisma.XOR<Prisma.PacienteScalarRelationFilter, Prisma.PacienteWhereInput>;
    medico?: Prisma.XOR<Prisma.MedicoScalarRelationFilter, Prisma.MedicoWhereInput>;
};
export type CitaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    creadaEn?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    paciente?: Prisma.PacienteOrderByWithRelationInput;
    medico?: Prisma.MedicoOrderByWithRelationInput;
};
export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    OR?: Prisma.CitaWhereInput[];
    NOT?: Prisma.CitaWhereInput | Prisma.CitaWhereInput[];
    fechaHora?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    creadaEn?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    estado?: Prisma.EnumEstadoCitaFilter<"Cita"> | $Enums.EstadoCita;
    pacienteId?: Prisma.IntFilter<"Cita"> | number;
    medicoId?: Prisma.IntFilter<"Cita"> | number;
    paciente?: Prisma.XOR<Prisma.PacienteScalarRelationFilter, Prisma.PacienteWhereInput>;
    medico?: Prisma.XOR<Prisma.MedicoScalarRelationFilter, Prisma.MedicoWhereInput>;
}, "id">;
export type CitaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    creadaEn?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
    _count?: Prisma.CitaCountOrderByAggregateInput;
    _avg?: Prisma.CitaAvgOrderByAggregateInput;
    _max?: Prisma.CitaMaxOrderByAggregateInput;
    _min?: Prisma.CitaMinOrderByAggregateInput;
    _sum?: Prisma.CitaSumOrderByAggregateInput;
};
export type CitaScalarWhereWithAggregatesInput = {
    AND?: Prisma.CitaScalarWhereWithAggregatesInput | Prisma.CitaScalarWhereWithAggregatesInput[];
    OR?: Prisma.CitaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CitaScalarWhereWithAggregatesInput | Prisma.CitaScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Cita"> | number;
    fechaHora?: Prisma.DateTimeWithAggregatesFilter<"Cita"> | Date | string;
    creadaEn?: Prisma.DateTimeWithAggregatesFilter<"Cita"> | Date | string;
    estado?: Prisma.EnumEstadoCitaWithAggregatesFilter<"Cita"> | $Enums.EstadoCita;
    pacienteId?: Prisma.IntWithAggregatesFilter<"Cita"> | number;
    medicoId?: Prisma.IntWithAggregatesFilter<"Cita"> | number;
};
export type CitaCreateInput = {
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    paciente: Prisma.PacienteCreateNestedOneWithoutCitasInput;
    medico: Prisma.MedicoCreateNestedOneWithoutCitasInput;
};
export type CitaUncheckedCreateInput = {
    id?: number;
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    pacienteId: number;
    medicoId: number;
};
export type CitaUpdateInput = {
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    paciente?: Prisma.PacienteUpdateOneRequiredWithoutCitasNestedInput;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutCitasNestedInput;
};
export type CitaUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    pacienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    medicoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CitaCreateManyInput = {
    id?: number;
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    pacienteId: number;
    medicoId: number;
};
export type CitaUpdateManyMutationInput = {
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
};
export type CitaUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    pacienteId?: Prisma.IntFieldUpdateOperationsInput | number;
    medicoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CitaListRelationFilter = {
    every?: Prisma.CitaWhereInput;
    some?: Prisma.CitaWhereInput;
    none?: Prisma.CitaWhereInput;
};
export type CitaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CitaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    creadaEn?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
};
export type CitaAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
};
export type CitaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    creadaEn?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
};
export type CitaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaHora?: Prisma.SortOrder;
    creadaEn?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
};
export type CitaSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    pacienteId?: Prisma.SortOrder;
    medicoId?: Prisma.SortOrder;
};
export type CitaCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutMedicoInput, Prisma.CitaUncheckedCreateWithoutMedicoInput> | Prisma.CitaCreateWithoutMedicoInput[] | Prisma.CitaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutMedicoInput | Prisma.CitaCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.CitaCreateManyMedicoInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutMedicoInput, Prisma.CitaUncheckedCreateWithoutMedicoInput> | Prisma.CitaCreateWithoutMedicoInput[] | Prisma.CitaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutMedicoInput | Prisma.CitaCreateOrConnectWithoutMedicoInput[];
    createMany?: Prisma.CitaCreateManyMedicoInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutMedicoInput, Prisma.CitaUncheckedCreateWithoutMedicoInput> | Prisma.CitaCreateWithoutMedicoInput[] | Prisma.CitaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutMedicoInput | Prisma.CitaCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutMedicoInput | Prisma.CitaUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.CitaCreateManyMedicoInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutMedicoInput | Prisma.CitaUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutMedicoInput | Prisma.CitaUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutMedicoInput, Prisma.CitaUncheckedCreateWithoutMedicoInput> | Prisma.CitaCreateWithoutMedicoInput[] | Prisma.CitaUncheckedCreateWithoutMedicoInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutMedicoInput | Prisma.CitaCreateOrConnectWithoutMedicoInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutMedicoInput | Prisma.CitaUpsertWithWhereUniqueWithoutMedicoInput[];
    createMany?: Prisma.CitaCreateManyMedicoInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutMedicoInput | Prisma.CitaUpdateWithWhereUniqueWithoutMedicoInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutMedicoInput | Prisma.CitaUpdateManyWithWhereWithoutMedicoInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaCreateNestedManyWithoutPacienteInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutPacienteInput, Prisma.CitaUncheckedCreateWithoutPacienteInput> | Prisma.CitaCreateWithoutPacienteInput[] | Prisma.CitaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutPacienteInput | Prisma.CitaCreateOrConnectWithoutPacienteInput[];
    createMany?: Prisma.CitaCreateManyPacienteInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutPacienteInput, Prisma.CitaUncheckedCreateWithoutPacienteInput> | Prisma.CitaCreateWithoutPacienteInput[] | Prisma.CitaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutPacienteInput | Prisma.CitaCreateOrConnectWithoutPacienteInput[];
    createMany?: Prisma.CitaCreateManyPacienteInputEnvelope;
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
};
export type CitaUpdateManyWithoutPacienteNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutPacienteInput, Prisma.CitaUncheckedCreateWithoutPacienteInput> | Prisma.CitaCreateWithoutPacienteInput[] | Prisma.CitaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutPacienteInput | Prisma.CitaCreateOrConnectWithoutPacienteInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutPacienteInput | Prisma.CitaUpsertWithWhereUniqueWithoutPacienteInput[];
    createMany?: Prisma.CitaCreateManyPacienteInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutPacienteInput | Prisma.CitaUpdateWithWhereUniqueWithoutPacienteInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutPacienteInput | Prisma.CitaUpdateManyWithWhereWithoutPacienteInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type CitaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: Prisma.XOR<Prisma.CitaCreateWithoutPacienteInput, Prisma.CitaUncheckedCreateWithoutPacienteInput> | Prisma.CitaCreateWithoutPacienteInput[] | Prisma.CitaUncheckedCreateWithoutPacienteInput[];
    connectOrCreate?: Prisma.CitaCreateOrConnectWithoutPacienteInput | Prisma.CitaCreateOrConnectWithoutPacienteInput[];
    upsert?: Prisma.CitaUpsertWithWhereUniqueWithoutPacienteInput | Prisma.CitaUpsertWithWhereUniqueWithoutPacienteInput[];
    createMany?: Prisma.CitaCreateManyPacienteInputEnvelope;
    set?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    disconnect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    delete?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    connect?: Prisma.CitaWhereUniqueInput | Prisma.CitaWhereUniqueInput[];
    update?: Prisma.CitaUpdateWithWhereUniqueWithoutPacienteInput | Prisma.CitaUpdateWithWhereUniqueWithoutPacienteInput[];
    updateMany?: Prisma.CitaUpdateManyWithWhereWithoutPacienteInput | Prisma.CitaUpdateManyWithWhereWithoutPacienteInput[];
    deleteMany?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
};
export type EnumEstadoCitaFieldUpdateOperationsInput = {
    set?: $Enums.EstadoCita;
};
export type CitaCreateWithoutMedicoInput = {
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    paciente: Prisma.PacienteCreateNestedOneWithoutCitasInput;
};
export type CitaUncheckedCreateWithoutMedicoInput = {
    id?: number;
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    pacienteId: number;
};
export type CitaCreateOrConnectWithoutMedicoInput = {
    where: Prisma.CitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CitaCreateWithoutMedicoInput, Prisma.CitaUncheckedCreateWithoutMedicoInput>;
};
export type CitaCreateManyMedicoInputEnvelope = {
    data: Prisma.CitaCreateManyMedicoInput | Prisma.CitaCreateManyMedicoInput[];
    skipDuplicates?: boolean;
};
export type CitaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.CitaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CitaUpdateWithoutMedicoInput, Prisma.CitaUncheckedUpdateWithoutMedicoInput>;
    create: Prisma.XOR<Prisma.CitaCreateWithoutMedicoInput, Prisma.CitaUncheckedCreateWithoutMedicoInput>;
};
export type CitaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: Prisma.CitaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CitaUpdateWithoutMedicoInput, Prisma.CitaUncheckedUpdateWithoutMedicoInput>;
};
export type CitaUpdateManyWithWhereWithoutMedicoInput = {
    where: Prisma.CitaScalarWhereInput;
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyWithoutMedicoInput>;
};
export type CitaScalarWhereInput = {
    AND?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
    OR?: Prisma.CitaScalarWhereInput[];
    NOT?: Prisma.CitaScalarWhereInput | Prisma.CitaScalarWhereInput[];
    id?: Prisma.IntFilter<"Cita"> | number;
    fechaHora?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    creadaEn?: Prisma.DateTimeFilter<"Cita"> | Date | string;
    estado?: Prisma.EnumEstadoCitaFilter<"Cita"> | $Enums.EstadoCita;
    pacienteId?: Prisma.IntFilter<"Cita"> | number;
    medicoId?: Prisma.IntFilter<"Cita"> | number;
};
export type CitaCreateWithoutPacienteInput = {
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    medico: Prisma.MedicoCreateNestedOneWithoutCitasInput;
};
export type CitaUncheckedCreateWithoutPacienteInput = {
    id?: number;
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    medicoId: number;
};
export type CitaCreateOrConnectWithoutPacienteInput = {
    where: Prisma.CitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CitaCreateWithoutPacienteInput, Prisma.CitaUncheckedCreateWithoutPacienteInput>;
};
export type CitaCreateManyPacienteInputEnvelope = {
    data: Prisma.CitaCreateManyPacienteInput | Prisma.CitaCreateManyPacienteInput[];
    skipDuplicates?: boolean;
};
export type CitaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: Prisma.CitaWhereUniqueInput;
    update: Prisma.XOR<Prisma.CitaUpdateWithoutPacienteInput, Prisma.CitaUncheckedUpdateWithoutPacienteInput>;
    create: Prisma.XOR<Prisma.CitaCreateWithoutPacienteInput, Prisma.CitaUncheckedCreateWithoutPacienteInput>;
};
export type CitaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: Prisma.CitaWhereUniqueInput;
    data: Prisma.XOR<Prisma.CitaUpdateWithoutPacienteInput, Prisma.CitaUncheckedUpdateWithoutPacienteInput>;
};
export type CitaUpdateManyWithWhereWithoutPacienteInput = {
    where: Prisma.CitaScalarWhereInput;
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyWithoutPacienteInput>;
};
export type CitaCreateManyMedicoInput = {
    id?: number;
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    pacienteId: number;
};
export type CitaUpdateWithoutMedicoInput = {
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    paciente?: Prisma.PacienteUpdateOneRequiredWithoutCitasNestedInput;
};
export type CitaUncheckedUpdateWithoutMedicoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    pacienteId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CitaUncheckedUpdateManyWithoutMedicoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    pacienteId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CitaCreateManyPacienteInput = {
    id?: number;
    fechaHora: Date | string;
    creadaEn?: Date | string;
    estado?: $Enums.EstadoCita;
    medicoId: number;
};
export type CitaUpdateWithoutPacienteInput = {
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    medico?: Prisma.MedicoUpdateOneRequiredWithoutCitasNestedInput;
};
export type CitaUncheckedUpdateWithoutPacienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    medicoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CitaUncheckedUpdateManyWithoutPacienteInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaHora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creadaEn?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.EnumEstadoCitaFieldUpdateOperationsInput | $Enums.EstadoCita;
    medicoId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type CitaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fechaHora?: boolean;
    creadaEn?: boolean;
    estado?: boolean;
    pacienteId?: boolean;
    medicoId?: boolean;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cita"]>;
export type CitaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fechaHora?: boolean;
    creadaEn?: boolean;
    estado?: boolean;
    pacienteId?: boolean;
    medicoId?: boolean;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cita"]>;
export type CitaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fechaHora?: boolean;
    creadaEn?: boolean;
    estado?: boolean;
    pacienteId?: boolean;
    medicoId?: boolean;
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cita"]>;
export type CitaSelectScalar = {
    id?: boolean;
    fechaHora?: boolean;
    creadaEn?: boolean;
    estado?: boolean;
    pacienteId?: boolean;
    medicoId?: boolean;
};
export type CitaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fechaHora" | "creadaEn" | "estado" | "pacienteId" | "medicoId", ExtArgs["result"]["cita"]>;
export type CitaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
};
export type CitaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
};
export type CitaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    paciente?: boolean | Prisma.PacienteDefaultArgs<ExtArgs>;
    medico?: boolean | Prisma.MedicoDefaultArgs<ExtArgs>;
};
export type $CitaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Cita";
    objects: {
        paciente: Prisma.$PacientePayload<ExtArgs>;
        medico: Prisma.$MedicoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fechaHora: Date;
        creadaEn: Date;
        estado: $Enums.EstadoCita;
        pacienteId: number;
        medicoId: number;
    }, ExtArgs["result"]["cita"]>;
    composites: {};
};
export type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CitaPayload, S>;
export type CitaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CitaCountAggregateInputType | true;
};
export interface CitaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Cita'];
        meta: {
            name: 'Cita';
        };
    };
    findUnique<T extends CitaFindUniqueArgs>(args: Prisma.SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CitaFindFirstArgs>(args?: Prisma.SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CitaFindManyArgs>(args?: Prisma.SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CitaCreateArgs>(args: Prisma.SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CitaCreateManyArgs>(args?: Prisma.SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CitaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CitaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CitaDeleteArgs>(args: Prisma.SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CitaUpdateArgs>(args: Prisma.SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CitaDeleteManyArgs>(args?: Prisma.SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CitaUpdateManyArgs>(args: Prisma.SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CitaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CitaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CitaUpsertArgs>(args: Prisma.SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma.Prisma__CitaClient<runtime.Types.Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CitaCountArgs>(args?: Prisma.Subset<T, CitaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CitaCountAggregateOutputType> : number>;
    aggregate<T extends CitaAggregateArgs>(args: Prisma.Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>;
    groupBy<T extends CitaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CitaGroupByArgs['orderBy'];
    } : {
        orderBy?: CitaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CitaFieldRefs;
}
export interface Prisma__CitaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    paciente<T extends Prisma.PacienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PacienteDefaultArgs<ExtArgs>>): Prisma.Prisma__PacienteClient<runtime.Types.Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    medico<T extends Prisma.MedicoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MedicoDefaultArgs<ExtArgs>>): Prisma.Prisma__MedicoClient<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CitaFieldRefs {
    readonly id: Prisma.FieldRef<"Cita", 'Int'>;
    readonly fechaHora: Prisma.FieldRef<"Cita", 'DateTime'>;
    readonly creadaEn: Prisma.FieldRef<"Cita", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"Cita", 'EstadoCita'>;
    readonly pacienteId: Prisma.FieldRef<"Cita", 'Int'>;
    readonly medicoId: Prisma.FieldRef<"Cita", 'Int'>;
}
export type CitaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where: Prisma.CitaWhereUniqueInput;
};
export type CitaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where: Prisma.CitaWhereUniqueInput;
};
export type CitaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CitaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CitaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CitaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CitaCreateInput, Prisma.CitaUncheckedCreateInput>;
};
export type CitaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CitaCreateManyInput | Prisma.CitaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CitaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    data: Prisma.CitaCreateManyInput | Prisma.CitaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CitaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CitaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CitaUpdateInput, Prisma.CitaUncheckedUpdateInput>;
    where: Prisma.CitaWhereUniqueInput;
};
export type CitaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyInput>;
    where?: Prisma.CitaWhereInput;
    limit?: number;
};
export type CitaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CitaUpdateManyMutationInput, Prisma.CitaUncheckedUpdateManyInput>;
    where?: Prisma.CitaWhereInput;
    limit?: number;
    include?: Prisma.CitaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CitaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where: Prisma.CitaWhereUniqueInput;
    create: Prisma.XOR<Prisma.CitaCreateInput, Prisma.CitaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CitaUpdateInput, Prisma.CitaUncheckedUpdateInput>;
};
export type CitaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
    where: Prisma.CitaWhereUniqueInput;
};
export type CitaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CitaWhereInput;
    limit?: number;
};
export type CitaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CitaSelect<ExtArgs> | null;
    omit?: Prisma.CitaOmit<ExtArgs> | null;
    include?: Prisma.CitaInclude<ExtArgs> | null;
};
