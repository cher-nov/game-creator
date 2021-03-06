﻿using System;
using System.Collections.Generic;
using System.Text;

namespace GameCreator.Framework.Gml
{
    public class LogicalOr : BinaryExpression
    {
        public LogicalOr(Expression e1, Expression e2, int line, int col) : base(e1, e2, line, col) { }

        public override ExpressionKind Kind
        {
            get { return ExpressionKind.LogicalOr; }
        }
        public override Expression Reduce()
        {
            return Fold(Left, Right, (v1, v2) => v1 > 0 || v2 > 0);
        }

        public override string Operator
        {
            get { return "||"; }
        }
    }
}
