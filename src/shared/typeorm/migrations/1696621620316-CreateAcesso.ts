import { 
    MigrationInterface, 
    QueryRunner, 
    Table, 
    TableForeignKey 
} from "typeorm";
  
export class CreateAcesso1696621620316 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'acessos',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'visitante_id',
                type: 'uuid',
              },
              {
                name: 'condominio_id',
                type: 'int'
              },
              {
                name: 'unidade_id',
                type: 'int'
              },
              {
                name: 'ja_saiu',
                type: 'boolean',
                default: 'false'
              },
              {
                name: 'data_entrada',
                type: 'timestamp with time zone',
                default: 'now()',
              },
              {
                name: 'data_saida',
                type: 'timestamp with time zone',
                default: 'null',
                isNullable: true,
              },
            ],
          }),
        );

        await queryRunner.createForeignKey(
          'acessos',
          new TableForeignKey({
            columnNames: ['visitante_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'visitantes',
            onDelete: "CASCADE",
          }),
        );
    
        await queryRunner.createForeignKey(
          'acessos',
          new TableForeignKey({
            columnNames: ['condominio_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'condominios',
            onDelete: "CASCADE",
          }),
        );

        await queryRunner.createForeignKey(
            'acessos',
            new TableForeignKey({
              columnNames: ['unidade_id'],
              referencedColumnNames: ['id'],
              referencedTableName: 'unidades',
              onDelete: "CASCADE",
            }),
          );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('acessos');
      }
  }