import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EspecialidadModel = runtime.Types.Result.DefaultSelection<Prisma.$EspecialidadPayload>;
export type AggregateEspecialidad = {
    _count: EspecialidadCountAggregateOutputType | null;
    _avg: EspecialidadAvgAggregateOutputType | null;
    _sum: EspecialidadSumAggregateOutputType | null;
    _min: EspecialidadMinAggregateOutputType | null;
    _max: EspecialidadMaxAggregateOutputType | null;
};
export type EspecialidadAvgAggregateOutputType = {
    id: number | null;
};
export type EspecialidadSumAggregateOutputType = {
    id: number | null;
};
export type EspecialidadMinAggregateOutputType = {
    id: number | null;
    nombre: string | null;
};
export type EspecialidadMaxAggregateOutputType = {
    id: number | null;
    nombre: string | null;
};
export type EspecialidadCountAggregateOutputType = {
    id: number;
    nombre: number;
    _all: number;
};
export type EspecialidadAvgAggregateInputType = {
    id?: true;
};
export type EspecialidadSumAggregateInputType = {
    id?: true;
};
export type EspecialidadMinAggregateInputType = {
    id?: true;
    nombre?: true;
};
export type EspecialidadMaxAggregateInputType = {
    id?: true;
    nombre?: true;
};
export type EspecialidadCountAggregateInputType = {
    id?: true;
    nombre?: true;
    _all?: true;
};
export type EspecialidadAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EspecialidadWhereInput;
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EspecialidadCountAggregateInputType;
    _avg?: EspecialidadAvgAggregateInputType;
    _sum?: EspecialidadSumAggregateInputType;
    _min?: EspecialidadMinAggregateInputType;
    _max?: EspecialidadMaxAggregateInputType;
};
export type GetEspecialidadAggregateType<T extends EspecialidadAggregateArgs> = {
    [P in keyof T & keyof AggregateEspecialidad]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEspecialidad[P]> : Prisma.GetScalarType<T[P], AggregateEspecialidad[P]>;
};
export type EspecialidadGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EspecialidadWhereInput;
    orderBy?: Prisma.EspecialidadOrderByWithAggregationInput | Prisma.EspecialidadOrderByWithAggregationInput[];
    by: Prisma.EspecialidadScalarFieldEnum[] | Prisma.EspecialidadScalarFieldEnum;
    having?: Prisma.EspecialidadScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EspecialidadCountAggregateInputType | true;
    _avg?: EspecialidadAvgAggregateInputType;
    _sum?: EspecialidadSumAggregateInputType;
    _min?: EspecialidadMinAggregateInputType;
    _max?: EspecialidadMaxAggregateInputType;
};
export type EspecialidadGroupByOutputType = {
    id: number;
    nombre: string;
    _count: EspecialidadCountAggregateOutputType | null;
    _avg: EspecialidadAvgAggregateOutputType | null;
    _sum: EspecialidadSumAggregateOutputType | null;
    _min: EspecialidadMinAggregateOutputType | null;
    _max: EspecialidadMaxAggregateOutputType | null;
};
export type GetEspecialidadGroupByPayload<T extends EspecialidadGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EspecialidadGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EspecialidadGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EspecialidadGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EspecialidadGroupByOutputType[P]>;
}>>;
export type EspecialidadWhereInput = {
    AND?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    OR?: Prisma.EspecialidadWhereInput[];
    NOT?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    id?: Prisma.IntFilter<"Especialidad"> | number;
    nombre?: Prisma.StringFilter<"Especialidad"> | string;
    medicos?: Prisma.MedicoListRelationFilter;
};
export type EspecialidadOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    medicos?: Prisma.MedicoOrderByRelationAggregateInput;
};
export type EspecialidadWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nombre?: string;
    AND?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    OR?: Prisma.EspecialidadWhereInput[];
    NOT?: Prisma.EspecialidadWhereInput | Prisma.EspecialidadWhereInput[];
    medicos?: Prisma.MedicoListRelationFilter;
}, "id" | "nombre">;
export type EspecialidadOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    _count?: Prisma.EspecialidadCountOrderByAggregateInput;
    _avg?: Prisma.EspecialidadAvgOrderByAggregateInput;
    _max?: Prisma.EspecialidadMaxOrderByAggregateInput;
    _min?: Prisma.EspecialidadMinOrderByAggregateInput;
    _sum?: Prisma.EspecialidadSumOrderByAggregateInput;
};
export type EspecialidadScalarWhereWithAggregatesInput = {
    AND?: Prisma.EspecialidadScalarWhereWithAggregatesInput | Prisma.EspecialidadScalarWhereWithAggregatesInput[];
    OR?: Prisma.EspecialidadScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EspecialidadScalarWhereWithAggregatesInput | Prisma.EspecialidadScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Especialidad"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"Especialidad"> | string;
};
export type EspecialidadCreateInput = {
    nombre: string;
    medicos?: Prisma.MedicoCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadUncheckedCreateInput = {
    id?: number;
    nombre: string;
    medicos?: Prisma.MedicoUncheckedCreateNestedManyWithoutEspecialidadInput;
};
export type EspecialidadUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    medicos?: Prisma.MedicoUpdateManyWithoutEspecialidadNestedInput;
};
export type EspecialidadUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    medicos?: Prisma.MedicoUncheckedUpdateManyWithoutEspecialidadNestedInput;
};
export type EspecialidadCreateManyInput = {
    id?: number;
    nombre: string;
};
export type EspecialidadUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EspecialidadUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EspecialidadCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
};
export type EspecialidadAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EspecialidadMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
};
export type EspecialidadMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
};
export type EspecialidadSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EspecialidadScalarRelationFilter = {
    is?: Prisma.EspecialidadWhereInput;
    isNot?: Prisma.EspecialidadWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EspecialidadCreateNestedOneWithoutMedicosInput = {
    create?: Prisma.XOR<Prisma.EspecialidadCreateWithoutMedicosInput, Prisma.EspecialidadUncheckedCreateWithoutMedicosInput>;
    connectOrCreate?: Prisma.EspecialidadCreateOrConnectWithoutMedicosInput;
    connect?: Prisma.EspecialidadWhereUniqueInput;
};
export type EspecialidadUpdateOneRequiredWithoutMedicosNestedInput = {
    create?: Prisma.XOR<Prisma.EspecialidadCreateWithoutMedicosInput, Prisma.EspecialidadUncheckedCreateWithoutMedicosInput>;
    connectOrCreate?: Prisma.EspecialidadCreateOrConnectWithoutMedicosInput;
    upsert?: Prisma.EspecialidadUpsertWithoutMedicosInput;
    connect?: Prisma.EspecialidadWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EspecialidadUpdateToOneWithWhereWithoutMedicosInput, Prisma.EspecialidadUpdateWithoutMedicosInput>, Prisma.EspecialidadUncheckedUpdateWithoutMedicosInput>;
};
export type EspecialidadCreateWithoutMedicosInput = {
    nombre: string;
};
export type EspecialidadUncheckedCreateWithoutMedicosInput = {
    id?: number;
    nombre: string;
};
export type EspecialidadCreateOrConnectWithoutMedicosInput = {
    where: Prisma.EspecialidadWhereUniqueInput;
    create: Prisma.XOR<Prisma.EspecialidadCreateWithoutMedicosInput, Prisma.EspecialidadUncheckedCreateWithoutMedicosInput>;
};
export type EspecialidadUpsertWithoutMedicosInput = {
    update: Prisma.XOR<Prisma.EspecialidadUpdateWithoutMedicosInput, Prisma.EspecialidadUncheckedUpdateWithoutMedicosInput>;
    create: Prisma.XOR<Prisma.EspecialidadCreateWithoutMedicosInput, Prisma.EspecialidadUncheckedCreateWithoutMedicosInput>;
    where?: Prisma.EspecialidadWhereInput;
};
export type EspecialidadUpdateToOneWithWhereWithoutMedicosInput = {
    where?: Prisma.EspecialidadWhereInput;
    data: Prisma.XOR<Prisma.EspecialidadUpdateWithoutMedicosInput, Prisma.EspecialidadUncheckedUpdateWithoutMedicosInput>;
};
export type EspecialidadUpdateWithoutMedicosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EspecialidadUncheckedUpdateWithoutMedicosInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type EspecialidadCountOutputType = {
    medicos: number;
};
export type EspecialidadCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    medicos?: boolean | EspecialidadCountOutputTypeCountMedicosArgs;
};
export type EspecialidadCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadCountOutputTypeSelect<ExtArgs> | null;
};
export type EspecialidadCountOutputTypeCountMedicosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MedicoWhereInput;
};
export type EspecialidadSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    medicos?: boolean | Prisma.Especialidad$medicosArgs<ExtArgs>;
    _count?: boolean | Prisma.EspecialidadCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["especialidad"]>;
export type EspecialidadSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
}, ExtArgs["result"]["especialidad"]>;
export type EspecialidadSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
}, ExtArgs["result"]["especialidad"]>;
export type EspecialidadSelectScalar = {
    id?: boolean;
    nombre?: boolean;
};
export type EspecialidadOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["especialidad"]>;
export type EspecialidadInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    medicos?: boolean | Prisma.Especialidad$medicosArgs<ExtArgs>;
    _count?: boolean | Prisma.EspecialidadCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EspecialidadIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EspecialidadIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EspecialidadPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Especialidad";
    objects: {
        medicos: Prisma.$MedicoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre: string;
    }, ExtArgs["result"]["especialidad"]>;
    composites: {};
};
export type EspecialidadGetPayload<S extends boolean | null | undefined | EspecialidadDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload, S>;
export type EspecialidadCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EspecialidadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EspecialidadCountAggregateInputType | true;
};
export interface EspecialidadDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Especialidad'];
        meta: {
            name: 'Especialidad';
        };
    };
    findUnique<T extends EspecialidadFindUniqueArgs>(args: Prisma.SelectSubset<T, EspecialidadFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EspecialidadFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EspecialidadFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EspecialidadFindFirstArgs>(args?: Prisma.SelectSubset<T, EspecialidadFindFirstArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EspecialidadFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EspecialidadFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EspecialidadFindManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EspecialidadCreateArgs>(args: Prisma.SelectSubset<T, EspecialidadCreateArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EspecialidadCreateManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EspecialidadCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EspecialidadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EspecialidadDeleteArgs>(args: Prisma.SelectSubset<T, EspecialidadDeleteArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EspecialidadUpdateArgs>(args: Prisma.SelectSubset<T, EspecialidadUpdateArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EspecialidadDeleteManyArgs>(args?: Prisma.SelectSubset<T, EspecialidadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EspecialidadUpdateManyArgs>(args: Prisma.SelectSubset<T, EspecialidadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EspecialidadUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EspecialidadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EspecialidadUpsertArgs>(args: Prisma.SelectSubset<T, EspecialidadUpsertArgs<ExtArgs>>): Prisma.Prisma__EspecialidadClient<runtime.Types.Result.GetResult<Prisma.$EspecialidadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EspecialidadCountArgs>(args?: Prisma.Subset<T, EspecialidadCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EspecialidadCountAggregateOutputType> : number>;
    aggregate<T extends EspecialidadAggregateArgs>(args: Prisma.Subset<T, EspecialidadAggregateArgs>): Prisma.PrismaPromise<GetEspecialidadAggregateType<T>>;
    groupBy<T extends EspecialidadGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EspecialidadGroupByArgs['orderBy'];
    } : {
        orderBy?: EspecialidadGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EspecialidadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEspecialidadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EspecialidadFieldRefs;
}
export interface Prisma__EspecialidadClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    medicos<T extends Prisma.Especialidad$medicosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Especialidad$medicosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MedicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EspecialidadFieldRefs {
    readonly id: Prisma.FieldRef<"Especialidad", 'Int'>;
    readonly nombre: Prisma.FieldRef<"Especialidad", 'String'>;
}
export type EspecialidadFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    where: Prisma.EspecialidadWhereUniqueInput;
};
export type EspecialidadFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    where: Prisma.EspecialidadWhereUniqueInput;
};
export type EspecialidadFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    where?: Prisma.EspecialidadWhereInput;
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EspecialidadScalarFieldEnum | Prisma.EspecialidadScalarFieldEnum[];
};
export type EspecialidadFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    where?: Prisma.EspecialidadWhereInput;
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EspecialidadScalarFieldEnum | Prisma.EspecialidadScalarFieldEnum[];
};
export type EspecialidadFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    where?: Prisma.EspecialidadWhereInput;
    orderBy?: Prisma.EspecialidadOrderByWithRelationInput | Prisma.EspecialidadOrderByWithRelationInput[];
    cursor?: Prisma.EspecialidadWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EspecialidadScalarFieldEnum | Prisma.EspecialidadScalarFieldEnum[];
};
export type EspecialidadCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EspecialidadCreateInput, Prisma.EspecialidadUncheckedCreateInput>;
};
export type EspecialidadCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EspecialidadCreateManyInput | Prisma.EspecialidadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EspecialidadCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    data: Prisma.EspecialidadCreateManyInput | Prisma.EspecialidadCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EspecialidadUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EspecialidadUpdateInput, Prisma.EspecialidadUncheckedUpdateInput>;
    where: Prisma.EspecialidadWhereUniqueInput;
};
export type EspecialidadUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EspecialidadUpdateManyMutationInput, Prisma.EspecialidadUncheckedUpdateManyInput>;
    where?: Prisma.EspecialidadWhereInput;
    limit?: number;
};
export type EspecialidadUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EspecialidadUpdateManyMutationInput, Prisma.EspecialidadUncheckedUpdateManyInput>;
    where?: Prisma.EspecialidadWhereInput;
    limit?: number;
};
export type EspecialidadUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    where: Prisma.EspecialidadWhereUniqueInput;
    create: Prisma.XOR<Prisma.EspecialidadCreateInput, Prisma.EspecialidadUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EspecialidadUpdateInput, Prisma.EspecialidadUncheckedUpdateInput>;
};
export type EspecialidadDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
    where: Prisma.EspecialidadWhereUniqueInput;
};
export type EspecialidadDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EspecialidadWhereInput;
    limit?: number;
};
export type Especialidad$medicosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MedicoSelect<ExtArgs> | null;
    omit?: Prisma.MedicoOmit<ExtArgs> | null;
    include?: Prisma.MedicoInclude<ExtArgs> | null;
    where?: Prisma.MedicoWhereInput;
    orderBy?: Prisma.MedicoOrderByWithRelationInput | Prisma.MedicoOrderByWithRelationInput[];
    cursor?: Prisma.MedicoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MedicoScalarFieldEnum | Prisma.MedicoScalarFieldEnum[];
};
export type EspecialidadDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EspecialidadSelect<ExtArgs> | null;
    omit?: Prisma.EspecialidadOmit<ExtArgs> | null;
    include?: Prisma.EspecialidadInclude<ExtArgs> | null;
};
